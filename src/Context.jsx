import React, { useState, useEffect } from "react"

import firebase from "../firebase";

export const AuthContext = React.createContext();

const ContexProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [post, setPost] = useState(null)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.firestore().collection("user").doc(user.uid).get().then((doc) => {
                    setUser(doc.data())
                })
            }
        })
    }, [])

    const signout = () => {
        firebase.auth().signOut().then(() => {
            setUser(null)
        }).catch(function (error) {
            alert(error)
        });
    }


    // console.log(user)
    // console.log(firebase.auth().currentUser)
    return (
        <AuthContext.Provider
            value={[user, setUser]}
        >
            <GlobalStyle />
            <Header user={user} signout={signout} />
            {
                user ?
                    <>
                        {children}
                        <Menubar />
                    </>
                    :
                    <>
                        <Top user={user} setUser={setUser} />
                    </>
            }
            <Footer />
        </AuthContext.Provider>
    )
}


export default Layout