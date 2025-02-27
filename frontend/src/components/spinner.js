function Spinner({ size, id, display }) {
    return (
        <div className="flex justify-center items-center">
            <div className={`${size} border-t-4 border-Almond border-solid rounded-full animate-spin ${display}`} id={id}></div>
        </div>
    )
}

export default Spinner;