
function EmptyScreen() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col text-white gap-2">
                <img src="/icons/empty.png" alt="" />
                <p>No Result Found</p>
            </div>
        </div>
    )
}

export default EmptyScreen;