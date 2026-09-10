function Container({ children }) {
    return (
        <div
            style={{
                width: "70%",
                margin: "60px auto"
            }}
        >
            {children}
        </div>
    );
}

export default Container;