import React, {lazy} from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Redirect, Route, Switch} from "react-router-dom";
import {AppDispatchType, StoreType} from "./Redux/redux-store";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import UserContainer from "./Components/User/UserContainer";
// import ProfileContainer from "./Components/Profile/ProfileContainer";
import {LoginContainer} from "./Components/Login/LoginContainer";
import {ThunkAuth} from "./Redux/authReducer";
import {connect} from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import {Preloader} from "./Components/Preloader/Preloader";
// import DialogsContainer from "./Components/Dialog/DialogsContainer";


const DialogsContainer = lazy(() => import('./Components/Dialog/DialogsContainer'));
const ProfileContainer = lazy(() => import('./Components/Profile/ProfileContainer'));


export type DialogDataType = {
    data: DialogTypeApp[]
    message: MessageTypeApp[]
    profilePage: ProfilePageType
    sideBar: SideData[]

}

export type DialogTypeApp = {
    id: number,
    name: string
}

export type SideData = {
    id: number,
    name: string
}


export type MessageTypeApp = {
    id: number,
    message: string
}

type ProfilePageType = {
    post: PostData[];
    newPostText: string

}
export type PostData = {
    id: number,
    message: string,
    likeCount: number
}


class App extends React.Component<AppType> {


    componentDidMount() {
        this.props.authApp()
    }


    render() {


        if (!this.props.isAutch) {

            return <div
                style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
                <CircularProgress/>
            </div>

        }


        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>

                        <Route path={'/dialogs'} render={() =>
                            <React.Suspense fallback={<Preloader/>}>
                                <DialogsContainer/>
                            </React.Suspense>
                        }/>
                        <Route path={`/profile/:userId?`} render={() =>
                            <React.Suspense fallback={<Preloader/>}>
                                <ProfileContainer/>
                            </React.Suspense>
                        }/>
                        <Route path={'/login'} render={() => <LoginContainer/>}/>
                        <Route path={'/user'} render={() => <UserContainer/>}/>
                        <Route exact path={`/`} render={() =>
                            <Redirect to={'/profile'}/>
                        }/>
                        <Route path={'/*'} render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>


                {/*<Route path={'/sidebar'} render={()=><SideBar />}/>*/}
            </div>

        );
    }


}

type mapStateToPropsType = {
    isAutch: boolean
}

const mapStateToProps = (state: StoreType): mapStateToPropsType => {
    return {
        isAutch: state.authReducer.loading
    }
}

type mapDispatchToPropsType = {
    authApp: () => void
}


const mapDispatchToProps = (dispatch: AppDispatchType): mapDispatchToPropsType => {

    return {
        authApp: () => {
            dispatch(ThunkAuth())
        },
    }
}

type AppType = mapDispatchToPropsType & mapStateToPropsType

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)




