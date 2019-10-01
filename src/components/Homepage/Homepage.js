import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Form,
    FormGroup,
    Input,
} from 'reactstrap';

import { getQuizzes, getQuizQuestions } from '../../actions'
import { SET_INITIAL_VALUES } from '../../actions/types';


class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            quizId: 0
        };
    }

    componentDidMount() {
        this.props.getQuizzes();
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSumbit = e => {
        e.preventDefault();
        this.props.setInitialValues(this.state);
        this.props.getQuizQuestions(this.state.quizId);
    }

    render() {
        return (
            <div>
                {/* Maybe makes theese change? */}
                <div className="d-flex-column justify-content-center my-4">
                    <h1>Hey there, take a quiz! Won't you?</h1>
                </div>
                <Form onSubmit={this.onSumbit}>
                    <div className="px-4 py-4">
                        <FormGroup>
                            <Input
                                type="text"
                                name="name"
                                value={this.state.value}
                                onChange={this.handleChange}
                                placeholder="Enter your name..."
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="select"
                                name="quizId"
                                disabled={this.state.name.length > 0 ? false : true}
                                onChange={this.handleChange}
                                defaultValue={0}
                            >
                                <option value={0} disabled>Select a quiz!</option>
                                {
                                    this.props.quizList.map(i => (
                                        <option value={i.id} key={i.id}>{i.title}</option>
                                    ))
                                }
                            </Input>
                        </FormGroup>
                    </div>
                    <Button
                        color="success"
                        className="buttons"
                        type="submit"
                        disabled={this.state.quizId === 0}
                    >... and let's begin!</Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    quizList: state.quiz.quizList
});

const mapDispatchToProps = dispatch => ({
    getQuizzes: () => dispatch(getQuizzes()),
    setInitialValues: (state) => dispatch({
        type: SET_INITIAL_VALUES,
        payload: state
    }),
    getQuizQuestions: (quizId) => dispatch(getQuizQuestions(quizId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);