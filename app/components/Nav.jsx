const React = require('react');
const {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();

        var location = this.refs.search.value;
        var encondedLocation = encodeURIComponent(location);

        if (location.length > 0) {
            this.refs.search.value = "";
            window.location.hash = '#/?location=' + encondedLocation;
        }
    },
    render: function () {
        return (
            <nav>
                <div className="top-bar" id="weather-menu">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">React Weather App</li>
                            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
                            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
                            <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <form onSubmit={this.onSearch}>
                            <ul className="menu">
                                <li>
                                    <input type="search" ref="search" placeholder="Search weather by city" />
                                </li>
                                <li>
                                    <input type="submit" className="button" value="Get Weather" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = Nav;
