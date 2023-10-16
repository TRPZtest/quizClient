

export default function Result ({points, maxPoints}) {
    return(
        <>           
            <h3>You scored {points} of {maxPoints}</h3>
            <button onClick={() => window.location.href = '/' } className="btn btn-primary">
                Home
            </button>
        </>
    )
}