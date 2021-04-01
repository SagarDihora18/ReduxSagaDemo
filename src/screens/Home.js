import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/UserActions';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';

class Home extends Component {

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'orange',
                    padding: 50,
                }}>

                <ActivityIndicator
                    animating={this.props.isLoading}
                    size="large"
                    color="#0000ff" />

                <FlatList
                    style={{ width: '100%' }}
                    data={this.props.userList}
                    renderItem={({ item, index }) => (
                        <View style={{ flex: 1, margin: 10 }}>

                            <Text>{item.name.first}</Text>
                            <Text>{item.email}</Text>
                            <Text>{item.phone}</Text>

                        </View>
                    )} />

                <TouchableOpacity
                    onPress={() => this.props.fetchUsers()}
                    style={{
                        marginTop: 50,
                        padding: 10,
                        backgroundColor: 'white'
                    }}>
                    <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', alignSelf: 'center' }}>
                        Fetch Data
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }

}

const mapStateToProps = state => ({
    isLoading: state.authReducer.isLoading,
    userList: state.authReducer.userList,
    error: state.authReducer.error
})

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(actions.fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
