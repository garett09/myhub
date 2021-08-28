import React, { Component } from 'react'

export class UbuntuApp extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            icon: "",
            desktop_shortcut: true,
            favourite: true,
        }
    }

    componentDidMount() {
        this.setState({ id: this.props.id, name: this.props.name, icon: this.props.icon })
    }


    openApp = () => {
        this.props.openApp(this.props.id);
    }

    render() {
        return (

            <div
                style={{ width: `${this.state.width}%`, height: `${this.state.height}%`, top: `${this.props.position.top}px`, right: `${this.props.position.right}px` }}
                className="p-1 absolute bg-white bg-opacity-0 hover:bg-opacity-20 focus:bg-ub-orange focus:bg-opacity-50 focus:border-yellow-700 focus:border-opacity-100 border border-transparent outline-none rounded select-none w-24 h-20 flex flex-col justify-start items-center text-center text-xs font-normal text-white"
                id={"app-" + this.state.id}
                onDoubleClick={this.openApp}
                tabIndex={0}
            >
                <img className="w-8 mb-1" src={this.state.icon} alt="Ubuntu Chrome" />
                {this.state.name}
            </div>
        )
    }
}

export default UbuntuApp