// react
import {FC} from 'react'
// libs
import { classNames } from 'shared/lib/classNames/classNames'
// ui
import { Loader } from 'shared/ui/Loader/ui/Loader'
// styles
import styles from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string

}

export const PageLoader:FC<PageLoaderProps> = ({className}) => {
return (
<div className={classNames(styles.PageLoader,{},[className])}>
 <Loader/>
</div>
)
}
