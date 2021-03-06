import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/header/Layout";
import HomeButton from "../../components/header/HomeButton";
import SearchBar from "../../components/header/SearchBar";
import UserInfo from "../../components/header/UserInfo";
import CircularProgress from "@material-ui/core/CircularProgress";
import { SIGN_UP, ME } from "../../graphql/user";
import { useMutation, useQuery } from "react-apollo-hooks";
import { withRouter } from "react-router-dom";


const Header = props => {
  const [signUp] = useMutation(SIGN_UP);
  const signUpBinder = (code) =>
    signUp({
      variables: {
        code: code,
      }
    });
  const { data, loading, refetch } = useQuery(ME, { pollInterval: 3590000 });

  const homeClick = () => {
    props.history.push("/");
  };
  const SearchClick = keyword => {
    props.history.push(`/search/${keyword||"NONE"}`);
  };
  const ManageClick = () => {
    props.history.push(`/manage/schedule/all/NONE/NONE`);
  };

  const LoginClick = async response => {
    console.log(response);
    const token= await signUpBinder(response.code);
    console.log("token::",token)
    await window.sessionStorage.setItem("token", token.data.signUp);
    window.location.reload();
  };
  const LogoutClick = async () => {
    await window.sessionStorage.removeItem("token");
    await refetch()
    window.location.reload();
  };

  return (
    <Layout>
      <HomeButton onClick={homeClick} home="실시간 스트리밍" />
      {loading ? (
        <CircularProgress size="2rem" color="secondary" />
      ) : (
        <UserInfo
          me={data.me}
          login={LoginClick}
          logout={LogoutClick}
          manage={ManageClick}
        />
      )}
      <SearchBar onClick={SearchClick} placeholder="검색어를 입력해주세요" keyword={props.keyword}/>
    </Layout>
  );
};

Header.propTypes = {};

export default withRouter(Header);
