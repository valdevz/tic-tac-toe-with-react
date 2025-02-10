const initialGameBoard: (null | string)[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

interface GameBoardProps {
    onSelectSquare: () => void;
    activePlayerSymbol: string;
}

export default function GameBoard({ onSelectSquare }: GameBoardProps) {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex: number, colIndex:number) {
    //     console.log('clicked', rowIndex, colIndex);
    //     setGameBoard((prevGameBoard)=> {

    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         console.log(updatedBoard);
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         console.log(updatedBoard);
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }
    return (
        <>
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={onSelectSquare}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
        </>
    )
}