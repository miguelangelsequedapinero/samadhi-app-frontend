import React from 'react';
import PropTypes from 'prop-types';
import {Link, useRouteMatch} from 'react-router-dom';
import ModuleTabs from './ModuleTabs';


const BrowseQuestions = (props) => {
  const {url} =useRouteMatch()
  const {questions,
    newQuestionValue,
    newQuestionValueOnChangeHandler,
    onSearchQuestionClickHandler,
  filteredListQuestions} =props;

  return(
    <div className="browse-questions">
      <div className="container-fluid bg-info min-vh-100" >
        <div className="row justify-content-center">
          <div className="col-2 offset-0 my-5">
              <a className="btn btn-primary btn-lg" href={`${url}/ask`} role="button" >Ask a question</a>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-6 offset-0 mb-5">
            <nav className="navbar navbar-light bg-light">
              <div class="form-inline">
                <input className="form-control mr-sm-2"
                  type="search"
                  placeholder="browse through all questions"
                  aria-label="Search"
                  value={newQuestionValue}
                  onChange ={newQuestionValueOnChangeHandler}
                  >
                </input>
                <button className="btn btn-outline-success my-2 my-sm-0"  onClick = {onSearchQuestionClickHandler}>Search</button>
              </div>
            </nav>

            {questions.map((filteredQuery, idx) => (
              <ul className="list-group">
                <li className="list-group-item" key={idx}><Link className="text-dark" to={"/beginners-course-content/browse-questions/" + filteredQuery._id}>{filteredQuery.title}</Link></li>
              </ul>))
            }

          </div>
        </div>
      </div>
    </div>
  )
}

BrowseQuestions.propTypes = {
  newQuestionValue: PropTypes.string,
  newQuestionValueOnChangeHandler: PropTypes.func,
  onSearchQuestionClickHandler: PropTypes.func
}

export default BrowseQuestions;
