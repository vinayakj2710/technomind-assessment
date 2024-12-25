import {Fragment} from 'react'

const Summary = (props) => {

  const checkShowContent = props.selectedTab === "summary" ? "fadeIn" : "";
  return (
    <Fragment>
      <div className={`container py-3 ${checkShowContent}`}>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <ul className="list-default">
              <li className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores fuga doloribus quasi exercitationem nam maxime adipisci neque natus iusto facilis incidunt obcaecati, corporis autem quam?</p>
              </li>
              <li className="description">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi magni vel dignissimos ipsam ut fuga?
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Summary;