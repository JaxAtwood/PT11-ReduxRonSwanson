import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRon } from "../actions/index";
import { QuoteCard, Card, Button } from "../styles/Styles";

const Ron = props => {
    console.log(props)

    useEffect(() => {
        props.fetchRon();
    }, []);

    if (props.isFetching) {
        return (
        <h2> Loading Ron... </h2>
        )
    }

    return (
        <>
            <QuoteCard>
            <div>
                {props.error && <p>{props.error}</p>}
            </div>
            <Card>
                <p>"{props.ron}"</p>
            </Card>
            </QuoteCard>
            <Button type="submit" onClick={() => window.location.reload()}>Tell Me More, Ron</Button>
        </>
        );
    };

const mapStateToProps = state => {
    return {
        ron: state.ron,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {fetchRon})(Ron);