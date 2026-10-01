function Footer() {
	return (
		<footer id="footer">
			<div className="copyright">
				&copy; 2027 Catevika - All rights reserved
			</div>

			<div className="socials">
				<a
					href="https://bsky.app/profile/catevika.bsky.social"
					target="_blank"
					rel="noreferrer"
				>
					<img
						alt="Bluesky"
						src="https://www.shieldcn.dev/badge/Bluesky-Bluesky-02073C.svg?logo=bluesky&amp;variant=branded&amp;size=sm"
					/>
				</a>
				<a
					href="https://x.com/dominique_bello"
					target="_blank"
					rel="noreferrer"
				>
					<img
						alt="X Follow"
						src="https://www.shieldcn.dev/x/follow/dominique_bello.svg?variant=branded&amp;size=sm"
					/>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
