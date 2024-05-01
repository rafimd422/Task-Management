import create from 'zustand';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, Auth, updateProfile } from 'firebase/auth';
import auth from '@/firebase/firebase.config';
import Swal from 'sweetalert2';
import { message } from 'antd';
import { Unsubscribe } from '@firebase/util';

interface User {

}

interface AuthStore {
    loading: boolean;
    user: null | User;
    logOut: () => void;
    createUser: (email: string, password: string, name: string, imageUrl: string) => void;
    init: () => () => void;
    signIn: any;
}
const useAuthStore = create<AuthStore>((set) => ({
    loading: true,
    user: null,
    createUser: async (email, password, name, imageUrl) => {
        set({ loading: true });
        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // Update user profile with name and imageUrl
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: imageUrl,
            });
            message.success('Account Created Successfully!');
            return userCredential;
        } catch (error) {
            message.error('Failed to create account. Please try again.');
        }
    },

    signIn: async (email: string, password: string) => {
        set({ loading: true });
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            message.success('Logged In Successfully!');
            return userCredential;
        } catch (error) {
            console.error('Error signing in:', error);
        } finally {
            set({ loading: false });
        }
    },

    logOut: () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to log out from this account?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                signOut(auth)
                    .then(() => {
                        Swal.fire({
                            title: 'Done',
                            text: "You've logged out successfully'",
                            icon: 'success',
                        });
                    })
                    .catch((error) => {
                        console.error('Error signing out:', error.message);
                    });
            }
        });
    },

    init: () => {
        const unsubscribe: Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            set({ user: currentUser, loading: false });
        });
        return () => unsubscribe();
    },
}));

export default useAuthStore;
