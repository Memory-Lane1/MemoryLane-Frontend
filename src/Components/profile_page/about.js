import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { ListGroup, List, ListGroupItemHeading,ListGroupItemText, ListGroupItem, Card, CardBody,CardText, CardTitle, CardSubtitle,
	Badge, Nav, NavItem, NavLink, Button, Jumbotron, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, CardFooter,Collapse,Alert,
} from "reactstrap";
import {Link} from 'react-router-dom';

const RenderTags = ({ tagNames}) =>
	tagNames.map((tag) => {
		return (
			<Badge pill className="tag">
				{tag}
			</Badge>
		);
	});

export class Answers extends Component{
	render(){
		let {answer, question,valu,deleteAnswer} = this.props;
		console.log("HI", question);
		const class_Name=valu % 2 === 0 ? "questionEven" : "questionOdd"
		return(
			<div>
				<Card className={'container question-container '+class_Name+' list-item-style'}>
						<div className='row'>
							<div className='col-12'>
								<CardTitle className='question-heading'>
									<Link className='question-heading' to={`/question-${question.quesId}-${question.heading}`}>
										<b>{question.heading}</b>
									</Link>
								</CardTitle>
								<CardSubtitle><CardText  className='single-question-profile-name text-muted' style={{textAlign:"left"}}> {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(answer.createdAt)))}</CardText></CardSubtitle>
								<CardBody>
									<div>
									<div className="editor__content" dangerouslySetInnerHTML={{ __html: answer.description }} />
									</div>
									<div>
									<hr/>
									<Row>
										<Button color='danger'  onClick={() => deleteAnswer(answer._id)} >
											<span className='fa fa-lg fa-trash'></span>
										</Button>
									</Row>

									</div>
								</CardBody>
							</div>
						</div>
				</Card>

			</div>
		)
	}
}

export class Questions extends Component {
    render() {
        const {question, answers, reactions, deleteQuestion, valu} = this.props;
        const class_Name=valu % 2 == 0 ? "questionEven" : "questionOdd"
        var ansCount = answers?answers.filter(a => a.question === question._id).length:0;
		var uvotesCount = reactions?reactions.filter(r => r.category === 'UpVote').filter(r => r.question === question._id ).length:0;
		var dvotesCount = reactions?reactions.filter(r => r.category === 'DownVote').filter(r => r.question === question._id).length:0;
		var viewsCount = reactions?reactions.filter(r => r.category === 'View').filter(r => r.question === question._id).length:0;
        return (
            <div>
                <ListGroup className='container question-container'>
					<ListGroupItem className={class_Name+' list-item-style'}>
							<div className='row'>
							<div className='col-12 col-sm-8'>
							<ListGroupItemHeading className='question-heading'>
                                <Link className='question-heading' to={`/question-${question._id}-${question.heading}`}>
								    {question.heading}
								</Link>
                            <Button color='danger' style={{marginTop: 6}} onClick={() => deleteQuestion(question._id)}><span className='fa fa-trash'></span></Button>
							</ListGroupItemHeading>

								<RenderTags tagNames={question.tagNames} />
								<ListGroupItemText className='question-text'>
									Posted by :-  {question.author.user_name}
								</ListGroupItemText>
								<ListGroupItemText className='question-text'>
									Posted at :- {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(question.createdAt)))}
								</ListGroupItemText>
							</div>
							<div className='col-12 col-sm-4'>
								<div className='prop-div'>
									<Badge className='prop' color='light'>{viewsCount}</Badge>
									<p>views</p>
								</div>
								<div className='prop-div'>
									<Badge className='prop' color='light'>{ansCount}</Badge>
									<p>answers</p>
								</div>
								<div className='prop-div'>
									<Badge className='prop' color='light'>{uvotesCount-dvotesCount}</Badge>
									<p>votes</p>
								</div>
							</div>
							</div>
					   
					</ListGroupItem>
			</ListGroup>

                
            </div>
        )
    }
}

export class Blogs extends Component{
	constructor(props){
		super(props);
		this.state={CollapseOpen:false}
	}
    render(){
        const {blog, breactions, valu, deleteBlog} = this.props;
        const class_Name=valu % 2 == 0 ? "questionEven" : "questionOdd"
        var likesCount = breactions?breactions.filter((r) => r.category === "Like").filter((r) => r.blog === blog._id).length:0;
	    var viewsCount = breactions?breactions.filter((r) => r.category === "View").filter((r) => r.blog === blog._id).length:0;
        return(

            <div>

                <ListGroup className="container blog-container">
				<ListGroupItem className={class_Name + " list-item-style"}>
					<div className="row">
						<div className="col-12 col-sm-8">
							<ListGroupItemHeading className="blog-heading" onclick = {()=>this.setState({CollapseOpen:!this.state.CollapseOpen})}>


							<span className="blog-heading"> 

									{blog.heading}
									</span>
								
									<Button color="danger" onClick={() => deleteBlog(blog._id)}>
										<span className="fa fa-lg fa-trash"></span>
									</Button>
							</ListGroupItemHeading>
							<RenderTags tagNames={blog.tagNames} />
							<ListGroupItemText className="blog-text">
								Posted by :- {blog.author.user_name}
							</ListGroupItemText>
							<ListGroupItemText className="blog-text">
								Posted at :-{" "}
								{new Intl.DateTimeFormat("en-US", {
									year: "numeric",
									month: "short",
									day: "2-digit",
								}).format(new Date(Date.parse(blog.createdAt)))}
							</ListGroupItemText>
						</div>
						<div className="col-12 col-sm-4">
							<div className="prop-div">
								<Badge className="prop" color="light">
									{viewsCount}
								</Badge>
								<p>Views</p>
							</div>
							<div className="prop-div">
								<Badge className="prop" color="light">
									{likesCount}
								</Badge>
								<p>Likes</p>
							</div>
							<div className="prop-div">
								<Badge className="prop" color="light">
									{blog.duration}
								</Badge>
								<p>minutes</p>
							</div>
						</div>
						<div className='col-12'>

						<Collapse horizontal isOpen={this.state.CollapseOpen}>
							<Alert
							  style={{
							    width: '500px'
							  }}
							>
							  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
							</Alert>
							</Collapse>

						</div>
					</div>
					<div
                      className="editor__content"
                      dangerouslySetInnerHTML={{
                        __html: blog.description,
                      }}
                    />
				</ListGroupItem>
			    </ListGroup>
            </div>
        )
    }
}

export class BlogDemands extends Component{
	render(){
		const {blogDemand, auth, deleteBlogDemand} = this.props;
		return(
		<ListGroup className='container blogDemand-container'>
                <ListGroupItem className={' list-item-style'}>
                        <div className='row'>
                        <div className='col-12 col-sm-8'>
						<ListGroupItemHeading className='question-heading'>
                                <p className='question-heading'>
								    <b>{blogDemand.title}</b>
								</p>
								<RenderTags tagNames={blogDemand.tagNames} />
								<br/>
                            <Button color='danger' style={{marginTop: 6}} onClick={() => deleteBlogDemand(blogDemand._id)}><span className='fa fa-trash'></span></Button>
							<br/>
							
							</ListGroupItemHeading>
							
							{/* <ListGroupItemHeading className='question-heading'>
                             <h4 style={{color:"#5a5a5a"}}><b>{blogDemand.title}</b></h4>
                             {
                                auth.userId === blogDemand.author._id
                                ?
                            
                                    <>
										<Button color='danger' className="delete-blog-demand" onClick={() => deleteBlogDemand(blogDemand._id)}>
                                    		<span className='fa fa-lg fa-trash'></span>
										</Button>
										<br/>
									</>
                            
                                :
                                <></>
                            }   
                            <RenderTags tagNames={blogDemand.tagNames} />
                            </ListGroupItemHeading> */}
                            
                            
                            <ListGroupItemText className='blogDemand-text'>
                                Posted by :-  {blogDemand.author.user_name}
                            </ListGroupItemText>
                        </div>

                        </div>
                </ListGroupItem>
        </ListGroup>
		)


	}
}
