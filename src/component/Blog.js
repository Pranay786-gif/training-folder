import React, { Component } from 'react';
import Navbar from './Navbar';
class Blog extends Component {



    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    componentDidMount() {
        fetch('https://demo.wp-api.org/wp-json/wp/v2/posts')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {



        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div> Loading...</div>
        }
        else {

            return (
                <div>
                    <Navbar />

                    <div className="list">
                        <h1>Posts</h1>

                        {items.map(item => (

                            <div>
                                <div>
                                    <p>  {item.date} </p>
                                    <a href={item.link}> <h1 dangerouslySetInnerHTML={{ __html: item.title.rendered }}>
                                    </h1> </a>
                                </div><br />
                                <p dangerouslySetInnerHTML={{ __html: item.content.rendered }}>
                                </p><br />


                            </div>

                        ))}

                    </div>

                </div>






            );
        }
    }
}
export default Blog;