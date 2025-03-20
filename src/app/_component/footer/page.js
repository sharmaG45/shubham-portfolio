const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4">
            {/* Bottom Section */}
            <div className="text-center text-gray-500 text-sm pt-4">
                <p>&copy; {new Date().getFullYear()} Shubham. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
