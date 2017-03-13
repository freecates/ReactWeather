const React = require('react');
const {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example location to try out</p>
            <ol>
                <li>
                    <Link to="/?location=Barcelona">Barcelona</Link>
                </li>
                <li>
                    <Link to="/?location=Mexico">México</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;