import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { GlobalContext } from '../store';
import { butter } from '../store/api';
import Aux from './_Aux';
import ScrollToTop from '../components/scroll.js';
import Blog from "../components/blog/blog";
import BlogDetail from '../components/blogdetail/blogdetail';
import Story from '../components/story';
import Shop from '../components/shop';
import Home from '../components/home';
import Why from '../components/why';
import Stockists from '../components/stockists';
import Process from '../components/oaxaca';


class Layout extends Component {
  static contextType = GlobalContext

  constructor(props) {
    super(props);

    this.state = {};
  }

  async componentDidMount() {
    const [state, dispatch] = this.context;
    const { data } = await butter.post.list();

    dispatch({
      type: "update_pages",
      data
    });
  }

  render() {
    const [state, dispatch] = this.context;
    const blogCategoryPaths = state.categories.map((category, i) => `/blog${i === 0 ? "/" : "/" + category}`);
    const blogDetailPaths = state.pages.data.map(page => `/blog/${page.slug}`);

    return (
      <ScrollToTop>
        <Aux>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/story/" exact component={Story} />
            <Route path="/shop/" exact component={Shop} />
            <Route path="/why-paquera/" exact component={Why} />
            <Route path="/stockists/" exact component={Stockists} />
            <Route path="/oaxaca-process/" exact component={Process} />
            <Route path={blogCategoryPaths} exact component={Blog} />
            <Route path={blogDetailPaths} exact component={BlogDetail} />
          </Switch>
        </Aux>
      </ScrollToTop>
    );
  }
}

export default Layout;
