interface Props {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
  
export default function ButtonWalletModal(props: Props) {
    const {
        onClick = (event: React.MouseEvent<HTMLButtonElement>) => {},
    } = props;  return (
        <button
            onClick={onClick}
            className={"focus:outline-none focus:border-none hover:bg-gray-400 hover:bg-opacity-25 p-2 rounded-full inline-flex items-center"}
            >
                hola
        </button>
    );
}