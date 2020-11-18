import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";


  function RenderDish({dish}) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  function RenderComments({comments}) {
    if (comments != null) {
      const list = comments.map((comm) => {
        return (
          <li key={comm.id}>
            <p>{comm.comment}</p>
            <p>
              -- {comm.author}, {new Date(comm.date).toDateString()}
            </p>
          </li>
        );
      });

      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">{list}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  const DishDetail = (props) => {
    if (props.selectedDish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.selectedDish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.dish.comments} />
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

export default DishDetail;
