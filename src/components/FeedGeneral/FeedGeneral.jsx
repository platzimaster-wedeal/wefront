import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'

// Styles
import "../../assets/styles/components/FeedGeneral/FeedGeneral.scss";

// Component
import WorkerInformation from "../WorkerInformation/WorkerInformation";
import PostDefineType from "../PostDefineType/PostDefineType";
import PostProblemDetail from "../PostProblemDetail/PostProblemDetail";
import Loading from "../../components/Loading/Loading";

const FeedGeneral = ({ data = [], isLoading, isError }) => {

const profile = useSelector(state => state.ProfileReducer)
const location = useLocation()

 return (
  <section className="feed-general">
  {
    location.pathname.includes('/user/profile') && profile.employee && (<WorkerInformation profile={profile} />)
  }
   {isError ? (
    <span>{isError}</span>
   ) : isLoading ? (
    <Loading />
   ) : data && data.length > 0 ? (
    data.map((post, i) => <PostDefineType key={i} data={post} />)
   ) : (
    <span>There is no posts!!</span>
   )}
  </section>
 );
};

export default FeedGeneral;
