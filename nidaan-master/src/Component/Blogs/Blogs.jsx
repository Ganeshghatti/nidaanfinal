import React from 'react'
import blog1 from '../../Assets/blog1.webp'
import blog2 from '../../Assets/blog2.webp'
import blog3 from '../../Assets/blog3.webp'
import blog4 from '../../Assets/blog4.webp'

import './Blogs.css'

const Blogs = () => {

    let blogsCount = 13;


    return (
        <div className='blogsContainer' id='blogTop'>

            <div className="blogsHeader">
                <h1 className="blogsHeading">Your Blogs</h1>
                <p className="blogsCount">{blogsCount}</p>
            </div>
            <div className="blogsHero">

                <div className="blogsHolder">
                    <div className="blog">
                        <img src={blog1} alt="" className="blogImg" />
                        <div className="blogContent">
                            <h2 className="blogTitle">
                                Fundamental Duties : Part IVA (Article 51A)
                            </h2>
                            <p className="blogSummary">
                                Originally, the Constitution of India did not contain these duties. Fundamental duties were added by 42nd and 86th Constitutional Amendment acts.
                            </p>
                            <p className="blogInfo">
                                <span className="blogDate">
                                    July 12,2022 .
                                </span>
                                <span className="blogAuthor">
                                    Dr. Gaurav Garg (Uro) In Urology
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="blog">
                        <img src={blog2} alt="" className="blogImg" />
                        <div className="blogContent">
                            <h2 className="blogTitle">
                                Fundamental Duties : Part IVA (Article 51A)
                            </h2>
                            <p className="blogSummary">
                                Originally, the Constitution of India did not contain these duties. Fundamental duties were added by 42nd and 86th Constitutional Amendment acts.
                            </p>
                            <p className="blogInfo">
                                <span className="date">
                                    July 12,2022 .
                                </span>
                                <span className="blogAuthor">
                                    Dr. Gaurav Garg (Uro) In Urology
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="blog">
                        <img src={blog3} alt="" className="blogImg" />
                        <div className="blogContent">
                            <h2 className="blogTitle">
                                Fundamental Duties : Part IVA (Article 51A)
                            </h2>
                            <p className="blogSummary">
                                Originally, the Constitution of India did not contain these duties. Fundamental duties were added by 42nd and 86th Constitutional Amendment acts.
                            </p>
                            <p className="blogInfo">
                                <span className="date">
                                    July 12,2022 .
                                </span>
                                <span className="blogAuthor">
                                    Dr. Gaurav Garg (Uro) In Urology
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="blog">
                        <img src={blog4} alt="" className="blogImg" />
                        <div className="blogContent">
                            <h2 className="blogTitle">
                                Fundamental Duties : Part IVA (Article 51A)
                            </h2>
                            <p className="blogSummary">
                                Originally, the Constitution of India did not contain these duties. Fundamental duties were added by 42nd and 86th Constitutional Amendment acts.
                            </p>
                            <p className="blogInfo">
                                <span className="date">
                                    July 12,2022 .
                                </span>
                                <span className="blogAuthor">
                                    Dr. Gaurav Garg (Uro) In Urology
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <aside className='rBlogs'>
                    <h3>Recommended for you</h3>

                    <div className="rBlogsHolder">
                        <div className="rBlog">
                            <a className="rBlogTitle">Fundamental Duties : Part IVA (Article 51A)</a>
                            <p className="rBlogInfo">
                                <span className='rBlogDate'>
                                    July 12,2022
                                </span>
                                <span className="rBlogTag">
                                    In Allergy
                                </span>
                            </p>
                        </div>
                        <div className="rBlog">
                            <a className="rBlogTitle">Fundamental Duties : Part IVA (Article 51A)</a>
                            <p className="rBlogInfo">
                                <span className='rBlogDate'>
                                    July 12,2022
                                </span>
                                <span className="rBlogTag">
                                    In Allergy
                                </span>
                            </p>
                        </div>
                        <div className="rBlog">
                            <a className="rBlogTitle">Fundamental Duties : Part IVA (Article 51A)</a>
                            <p className="rBlogInfo">
                                <span className='rBlogDate'>
                                    July 12,2022
                                </span>
                                <span className="rBlogTag">
                                    In Allergy
                                </span>
                            </p>
                        </div>
                        <div className="rBlog">
                            <a className="rBlogTitle">Fundamental Duties : Part IVA (Article 51A)</a>
                            <p className="rBlogInfo">
                                <span className='rBlogDate'>
                                    July 12,2022
                                </span>
                                <span className="rBlogTag">
                                    In Allergy
                                </span>
                            </p>
                        </div>
                        <div className="rBlog">
                            <a className="rBlogTitle">Fundamental Duties : Part IVA (Article 51A)</a>
                            <p className="rBlogInfo">
                                <span className='rBlogDate'>
                                    July 12,2022
                                </span>
                                <span className="rBlogTag">
                                    In Allergy
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="rBlogTopicsHolder">
                        <h4>See more Topic Suggestions</h4>
                        <div className="rBlogTags">
                            <span className="rTag">Skin</span>
                            <span className="rTag">Urology</span>
                            <span className="rTag">Allergy</span>
                            <span className="rTag">Skin</span>
                            <span className="rTag">Urology</span>
                            <span className="rTag">Allergy</span>
                            <span className="rTag">Skin</span>
                        </div>
                    </div>

                </aside>

            </div>
        </div>
    )
}

export default Blogs