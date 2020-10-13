import React, { useState } from "react"
import firebase from "../../../firebase"
import { useRecoilState } from 'recoil';
import { userState, postsState } from '../../../recoil/atoms'
import StyledLoginModal from "./LoginModal.styled"
import InputArea from "../../molecules/InputArea"
import Button from "../../atoms/Button"

const LoginModal = ({ setOpenLogin }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [user, setUser] = useRecoilState(userState)
    const [posts, setPosts] = useRecoilState(postsState)

    const onSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    firebase.firestore().collection("user").doc(user.uid).get().then((doc) => {
                        setUser(doc.data())
                    })
                }
            })
        })
            .catch(error => {
                alert(error)
            });
    }
    return (
        <StyledLoginModal>
            <div className="modal_box">
                <h1>ログイン画面</h1>
                <form onSubmit={onSubmit}>
                    <InputArea
                        value={email}
                        labelTitle="E-mail"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        label="email"
                        autoComplete="on"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputArea
                        value={password}
                        labelTitle="Password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        label="password"
                        autoComplete="on"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button value="ログイン" color="limegreen" type="submit" />
                    <Button value="キャンセル" color="#444" onClick={() => setOpenLogin(false)} />
                </form>
            </div>
        </StyledLoginModal>
    )
}

export default LoginModal