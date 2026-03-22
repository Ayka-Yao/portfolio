import useStars from "../hooks/useStars"

const StarBackground = () => {
    useStars();
    return (
        <canvas
            id="stars"
            className="pointer-events-none fixed inset-0 -z-10"
        />


    )
}

export default StarBackground