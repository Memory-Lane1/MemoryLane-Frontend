/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSpaces, fetchQuestions, fetchUser, fetchHomeFeed, fetchFollowSpaces,
	fetchAnswers, fetchComments, postComment, fetchBlogs,
	deleteComment, postQuestion, deleteQuestion, postReaction, fetchReactions, deleteReaction,
	postAnswer, deleteAnswer, postAReaction, fetchAReactions, deleteAReaction,postBlog,deleteBlog,
	postBComment,fetchBComments,fetchBReactions,postBReaction,deleteBComment,deleteBReaction, fetchBlogDemands, postBlogDemand, deleteBlogDemand} from "../redux/ActionCreators";
import Home from "./home_page/home";

import Profile_page from "./profile_page/profile";

import ScrollToTop from './scroll-to-top/scroll-to-top';

import Login from './login_signup/login';
import Signup from './login_signup/signup'; 
import Contact from './ContactUs/contact';
import AddQuestion from './add_forms/addQuestions';
import AddBlog from './add_forms/addBlogs';
import Logout from './login_signup/logout';
import AboutUs from './aboutUs/aboutUs';

import NewsProvider from "./news/NewsProvider"


const mapStateToProps = (state) => {
	return {
		
		questions: state.questions,
		blogs:state.blogs,
		// breactions:state.breactions,
		// bcomments:state.bcomments,
		// blogDemands:state.blogDemands,
		qreactions: state.qreactions,
		answers: state.answers,
		areactions: state.areactions,
		comments: state.comments,
		auth: state.auth,
		user: state.user
	};
};

const mapDispatchToProps = (dispatch) => ({
	 fetchSpaces: () => {
	 	dispatch(fetchSpaces());
	 },
	fetchQuestions: () => {
		dispatch(fetchQuestions());
	},
	fetchBlogs: (interests) => {
        dispatch(fetchBlogs(interests));
	},
	fetchBComments: () =>{
         dispatch(fetchBComments());
	},
	fetchBReactions: () =>{
        dispatch(fetchBReactions());
	},
	fetchBlogDemands:(interests)=>{
		dispatch(fetchBlogDemands(interests));
	},
	fetchReactions: () => {
		dispatch(fetchReactions());
	},
	fetchAReactions: () => {
		dispatch(fetchAReactions());
	},
	fetchAnswers: () => {
		dispatch(fetchAnswers())
	},
	fetchComments: () => {
		dispatch(fetchComments())
	},
	postComment: (questionId, author, comment) => dispatch(postComment(questionId, author, comment)),
	deleteComment: (commentId) => dispatch(deleteComment(commentId)),
	postQuestion: (question, userToken) => dispatch(postQuestion(question, userToken)),
	deleteQuestion: (quesId) => dispatch(deleteQuestion(quesId)),
	postAnswer: (answer) => dispatch(postAnswer(answer)),
	postReaction: (reac) => dispatch(postReaction(reac)),
	deleteReaction: (reacId) => dispatch(deleteReaction(reacId)),
	deleteAnswer: (answerId) => dispatch(deleteAnswer(answerId)),
	postAReaction: (reac) => dispatch(postAReaction(reac)),
	deleteAReaction: (reacId) => dispatch(deleteAReaction(reacId)),
	postBlog:(blog,userToken) => dispatch(postBlog(blog,userToken)),
	deleteBlog: (blogId) => dispatch(deleteBlog(blogId)),
	postBComment : (blogId,author,comment) => dispatch(postBComment(blogId,author,comment)),
	deleteBComment : (commentId) => dispatch(deleteBComment(commentId)),
	postBReaction : (reac) => dispatch(postBReaction(reac)),
	deleteBReaction: (reacId) => dispatch(deleteBReaction(reacId)),
	postBlogDemand:(blogDemand,userToken)=>dispatch(postBlogDemand(blogDemand,userToken)),
	deleteBlogDemand:(blogDemandId)=>dispatch(deleteBlogDemand(blogDemandId)),
	fetchHomeFeed: (interests) => dispatch(fetchHomeFeed(interests)),
	fetchFollowSpaces: (interests) => dispatch(fetchFollowSpaces(interests)),
	fetchUser: (userId) => dispatch(fetchUser(userId)),
});

class Main extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount = async () => {

		console.log(this.props.auth.interests)

		if(this.props.auth && this.props.auth.interests.length) {

			var interests = this.props.auth.interests.split('*');
			interests.pop();

			await this.props.fetchHomeFeed(interests);
			await this.props.fetchReactions();

			await this.props.fetchUser(this.props.auth.userId);

			await this.props.fetchBlogs(interests);
			await this.props.fetchBlogDemands(interests);
		}
		
	}

	componentDidUpdate = async (prevProps) => {
		var l1 = this.props.auth.interests.length;
		if(l1 && this.props.auth.userId !== prevProps.auth.userId){

			console.log("called this !!")
			console.log(this.props.auth.interests)
			var interests = [];
			for(var i=0;i<this.props.auth.interests.length;i++){
				interests.push(this.props.auth.interests[i].interest);
			}

			await this.props.fetchHomeFeed(interests);
			await this.props.fetchReactions();

			await this.props.fetchUser(this.props.auth.userId);


			await this.props.fetchBlogs(interests);
			await this.props.fetchBlogDemands(interests);
		}
		
	}

	render() {
		
		const HomeQuestions = () => {
			return(
				<Home 
			
					questions={this.props.questions.questions}
					isLoading={this.props.questions.isLoading}
					errMess={this.props.questions.errMess}
					auth={this.props.auth}
					deleteQuestion={this.props.deleteQuestion}
					answers={this.props.answers.answers}
					answersIsLoading = {this.props.answers.isLoading}
					answersErrMess = {this.props.answers.errMess}
					reactions={this.props.qreactions.qreactions}
					reactionsIsLoading={this.props.qreactions.isLoading}
					reactionsErrMess = {this.props.qreactions.errMess}
					postReaction={this.props.postReaction}

				/>
			);
		}
		const PrivateRoute = ({ component: Component, ...rest }) => (
			<Route {...rest} render={(props) => (
			  this.props.auth.isSignedIn
				? <Component {...props} />
				: <Redirect to={{
					pathname: '/login',
					state: { from: props.location }
				  }} />
			)} />
		  );

		return (
			<div>
				<ScrollToTop/>
				<Switch>
					<Route path="/home" component={HomeQuestions} />

				
					<PrivateRoute exact path="/profile/:userId" component={Profile_page} deleteQuestion={this.props.deleteQuestion}/>
					
					<Route path="/aboutUs" component={() => <AboutUs/>} />
					<Route path="/contact" component={Contact} />
					<Route path="/login" component={Login} />
					<PrivateRoute exact path="/imageResolution" component={() => <AddQuestion 
					postQuestion={this.props.postQuestion} 
					questions={this.props.questions}
					auth={this.props.auth}/>}/>
					<PrivateRoute path="/addBlog" component={() => <AddBlog 
					blogs={this.props.blogs}
					postBlog={this.props.postBlog} 
					auth={this.props.auth}/>} />
                    
					<Route path="/signup" component={Signup} />
					<Route path="/logout" component={Logout}/>
					<Route path="/news" component={NewsProvider}/>

					<Redirect to="/home" />



				</Switch>
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
