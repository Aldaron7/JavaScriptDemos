import React, { Component } from 'react';
import { Container } from 'flux/utils';
import BankBalanceStore from './BankBalanceStore_ReduceStore';
import BankRewarsdsStore from './BankRewardsStore';
import BankActions from './BankActions';

class App extends Component {

    constructor() {
        super( ...arguments );
        BankActions.createAccount();
    }

    deposit() {
        BankActions.depositIntoAccount( Number( this.refs.ammount.value ) );
        this.refs.ammount.value = '';
    }

    withdraw() {
        BankActions.withdrawFromAccount( Number( this.refs.ammount.value ) );
        this.refs.ammount.value = '';
    }

    render() {
        return (
            <div>
                <header>FluxTrust Bank</header>
                <h1>Your balance is ${( this.state.balance ).toFixed( 2 )}</h1>
                <h2>Your Points Rewards Tier is {this.state.rewardsTier}</h2>
                <div className="atm">
                    <input type="text" placeholder="Enter Ammount" ref="ammount" />
                    <br />
                    <button onClick={this.withdraw.bind( this )}>Withdraw</button>
                    <button onClick={this.deposit.bind( this )}>Deposit</button>
                </div>
            </div>
        );
    }
}

App.getStores = () => ( [BankBalanceStore, BankRewarsdsStore] );
App.calculateState = ( prevState ) => (
    {
        balance: BankBalanceStore.getState(),
        rewardsTier : BankRewarsdsStore.getState()
    } );

const AppContainer = Container.create( App );

export default AppContainer;