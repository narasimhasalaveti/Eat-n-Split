export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="app-footer">
			<p>
				&copy; {currentYear} Eat-n-Split. Built with ❤️ for fair bill splitting.
			</p>
			<p className="developer-credit">
				Developed by <strong>Narasimha</strong>
			</p>
		</footer>
	);
}
