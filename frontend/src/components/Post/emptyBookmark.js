function EmptyBookmark() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-2">
                <img src="/icons/bookmarklarge.png" alt="" className="w-20 h-20" />
                <h4>No Bookmarks</h4>
                <p className="text-sm w-3/4 text-center">Never miss out on important stories — bookmark your favorite news now and read them at your convenience!</p>
            </div>
        </div>
    )
}

export default EmptyBookmark;