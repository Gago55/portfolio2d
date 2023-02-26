import { CSSProperties, FC, ReactNode } from "react"

interface IProps {
    label: string
    labelPlacement: 'left' | 'center'
    children: JSX.Element | JSX.Element[] | ReactNode
    borderColor?: string
    style?: CSSProperties
}

const OutlinedDiv: FC<IProps> = ({ children, label, ...props }) => {

    return (
        <fieldset
            style={{
                border: `1px solid ${props.borderColor ? props.borderColor : '#25252d'}`,
                borderRadius: 5,
                padding: 10,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 5,
                justifyContent: 'space-evenly',
                ...props.style
            }}>
            <legend style={{ margin: props.labelPlacement === 'center' ? 'auto' : undefined }}>{label}</legend>  {children}
        </fieldset>
    )
}

export default OutlinedDiv