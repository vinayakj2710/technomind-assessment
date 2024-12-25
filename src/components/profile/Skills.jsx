import {Fragment} from 'react'

const Skills = (props) => {

  const checkShowContent = props.selectedTab === "skills" ? "fadeIn" : "";
  return (
    <Fragment>
      <div className={`container py-3 ${checkShowContent}`}>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <ul className="list-default">
              <li className="description">
                <p>ReactJs</p>
              </li>
              <li className="description"><p>Javascipt</p></li>
              <li className="description"><p>Html</p></li>
              <li className="description"><p>CSS</p></li>
              <li className="description"><p>Bootstrap</p></li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Skills;