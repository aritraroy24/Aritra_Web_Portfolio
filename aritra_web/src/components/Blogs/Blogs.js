import React from 'react';
import './Blogs.scss';
import Fade from 'react-reveal/Fade';
import blogs from '../../data/blogs';
import BlogCard from '../BlogCard/BlogCard'


const Blogs = () => {
	
	function div1() {
		let i = 0;
		return (
			<div>
				<div className="blog_row">
					{blogs.slice(0, 2).map(() => (
						<BlogCard
							id={blogs[i].id}
							title={blogs[i].title}
							description={blogs[i].description}
							repoLink={blogs[i].repoLink}
							blogLink={blogs[i].blogLink}
							image={blogs[i].image}
							technologies={blogs[i].technologies}
							{...i++}
						/>
					))}
				</div>
				<div className="blog_row">
					{blogs.slice(0, 2).map(() => (
						<BlogCard
							id={blogs[i].id}
							title={blogs[i].title}
							description={blogs[i].description}
							repoLink={blogs[i].repoLink}
							blogLink={blogs[i].blogLink}
							image={blogs[i].image}
							technologies={blogs[i].technologies}
							{...i++}
						/>
					))}
				</div>
				<div className="blog_row">
					{blogs.slice(0, 1).map(() => (
						<BlogCard
							id={blogs[i].id}
							title={blogs[i].title}
							description={blogs[i].description}
							repoLink={blogs[i].repoLink}
							blogLink={blogs[i].blogLink}
							image={blogs[i].image}
							technologies={blogs[i].technologies}
							{...i++}
						/>
					))}
				</div>
			</div>
		)
	}

	return (
		<main className='Blogs'>
			<Fade bottom>
				<h2>
					<span className='number-heading'>03. </span>My Blogs On Medium
				</h2>
			</Fade>
			<section className='Blogs-container'>
				{div1(blogs, BlogCard)}
			</section>
		</main>
	);
};

export default Blogs;