import React, { Component } from 'react';
import api from '../services/api';

import './Feed.css'

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Eduardo Castellini</span>
                            <span className="place">Umuarama</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="https://enigmatic-inlet-99957.herokuapp.com/files/20171225_122037.jpg" alt="" />
                    <footer>
                        <div className="actions">
                            <img src={like} alt=" " />
                            <img src={comment} alt=" " />
                            <img src={send} alt=" " />
                        </div>

                        <strong> 900 curtidas</strong>

                        <p>
                            Um post muito Massa!
                            <span>#react #omnistack #top</span>
                        </p>
                    </footer>
                </article>

                <article>
                    <header>
                        <div className="user-info">
                            <span>Eduardo Castellini</span>
                            <span className="place">Umuarama</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="https://enigmatic-inlet-99957.herokuapp.com/files/20171225_122037.jpg" alt="" />
                    <footer>
                        <div className="actions">
                            <img src={like} alt=" " />
                            <img src={comment} alt=" " />
                            <img src={send} alt=" " />
                        </div>

                        <strong> 900 curtidas</strong>

                        <p>
                            Um post muito Massa!
                            <span>#react #omnistack #top</span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    }
}

export default Feed;