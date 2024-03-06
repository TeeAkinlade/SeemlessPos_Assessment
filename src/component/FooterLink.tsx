import { Link } from "react-router-dom";

const footerLinks = [
	{
		id: 1,
		title: 'product',
		links: [
			{ id: 1, link: 'Tshirt' },
			{ id: 2, link: 'Jacket' },
			{ id: 3, link: 'Shoes' },
			{ id: 4, link: 'Pants' },
			{ id: 5, link: 'Sunglasses' },
		],
	},
	{
		id: 2,
		title: 'Categories',
		links: [
			{ id: 1, link: 'Men' },
			{ id: 2, link: 'Women' },
			{ id: 3, link: 'Kids' },
			{ id: 4, link: 'New Arrival' },
			{ id: 5, link: 'Gift' },
		],
	},
	{
		id: 3,
		title: 'Social',
		links: [
			{ id: 1, link: 'Instagram' },
			{ id: 2, link: 'Facebook' },
			{ id: 4, link: 'Youtube' },
			{ id: 5, link: 'Twiter' },
		],
	},
];

const FooterLink = () => {
  return (
    <div className='flex flex-col md:gap-16 md:flex-row'>
			<div className='flex gap-8 md:gap-20'>
				{footerLinks.map((item) => (
					<div key={item.id}>
						<h3 className='mb-6 text-sm md:text-base font-semibold text-black'>
							{item.title}
						</h3>
						{item.links.map(({ id, link }) => (
							<div className='pb-2' key={id}>
								<Link to='#' className='text-xs text-gray-500 hover:text-gray-700'>{link}</Link>
							</div>
						))}
					</div>
				))}
			</div>
    </div>
  )
}

export default FooterLink