function Header() {
    return (
        <header
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
        >
            <h1
            style={{
              margin: 0,
              fontSize: "2rem",
              fontWeight: "600",
            }}
            >Dynamic Multi-Platform Post Composer</h1>
        </header>
    );
}

export default Header;