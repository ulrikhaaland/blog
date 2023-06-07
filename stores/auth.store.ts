import { makeObservable, observable, action } from 'mobx';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail,
  User as FirebaseUser,
} from 'firebase/auth';
import {
  collection,
  addDoc,
  getDoc,
  doc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { auth, db, provider } from '@/pages/_app';

export type User = {
  uid: string;
  email: string;
  displayName?: string | null;
  photoURL?: string | null;
  credits: number;
  subscribed?: boolean;
};

export default class AuthStore {
  open: boolean = false;
  user?: User | null;
  fromPath?: string;

  constructor() {
    makeObservable(this, {
      open: observable,
      user: observable,
      fromPath: observable,
      setOpen: action,
      signOut: action,
      signInWithEmailAndPassword: action,
      createUserWithEmailAndPassword: action,
      signInWithGoogle: action,
      checkAuth: action,
      sendPasswordResetEmail: action,
      setUser: action,
      updateUserData: action,
      deleteAccount: action,
      setFromPath: action,
    });
  }

  checkAuth = () => {
    this.user = auth?.currentUser
      ? {
          uid: auth.currentUser.uid!,
          email: auth.currentUser.email!,
          displayName: auth.currentUser.displayName ?? undefined,
          photoURL: auth.currentUser.photoURL ?? undefined,
          credits: 0,
        }
      : undefined;
  };

  setOpen = (open: boolean) => {
    this.open = open;
  };

  setFromPath = (fromPath: string | undefined) => {
    this.fromPath = fromPath;
  };

  updateUserData = (name: string, subscribed: boolean) => {
    if (this.user) {
      this.user.displayName = name;
      this.user.subscribed = subscribed;
      updateDoc(doc(db, 'users', this.user!.uid), {
        name: name,
        subscribed: subscribed,
      });
    }
  };

  setUser = (
    user: User | undefined,
    firebaseUser?: FirebaseUser | undefined
  ) => {
    if (user) {
      this.user = user;
    } else if (firebaseUser) {
      this.setOpen(false);
      this.getUserOrCreateIfNotExists(firebaseUser!.uid);
      this.user = {
        uid: firebaseUser.uid!,
        email: firebaseUser.email!,
        displayName: firebaseUser.displayName ?? undefined,
        photoURL: firebaseUser.photoURL ?? undefined,
        credits: 0,
      };
    } else this.user = undefined;
  };

  signOut = () => {
    signOut(auth)
      .then(() => {
        this.setUser(undefined);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  deleteAccount = () => {
    if (this.user) {
      auth.currentUser
        ?.delete()
        .then(() => {
          this.setUser(undefined);
        })

        .catch((error) => {
          // An error happened.
        });
    }
  };

  signInWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<string | undefined> => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        this.setUser(undefined, userCredential.user);
        this.setOpen(false);
        return;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        return error.message;
      });
  };

  createUserWithEmailAndPassword = (
    email: string,
    password: string
  ): Promise<string | undefined> => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        this.setUser(undefined, userCredential.user);
        this.setOpen(false);
        return;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        return error.message;
        // ..
      });
  };

  sendPasswordResetEmail = (email: string): Promise<string | undefined> => {
    return sendPasswordResetEmail(auth, email)
      .then((userCredential) => {
        // Signed in
        return;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        return error.message;
        // ..
      });
  };

  signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        this.setUser(undefined, result.user);

        this.setOpen(false);

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  async getUserOrCreateIfNotExists(uid: string): Promise<void> {
    const userDocSnapshot = await getDoc(doc(db, 'users/' + uid));

    const data = userDocSnapshot.data();
    try {
      if (!data) {
        const userData: User = {
          uid: uid,
          displayName: this.user!.displayName ?? null,
          email: this.user!.email,
          photoURL: this.user?.photoURL ?? null,
          credits: 1000,
          subscribed: true,
        };
        this.setUser(userData);
        await setDoc(doc(db, 'users', uid), userData);

        console.log('User document created successfully.');
      } else {
        const user: User = {
          uid: data?.uid,
          email: data?.email,
          displayName: data?.name,
          photoURL: data?.photoURL,
          credits: data?.credits,
          subscribed: data?.subscribed,
        };
        this.setUser(user);
      }
    } catch (error) {
      console.error('Error checking/creating user document: ', error);
    }
  }
}
