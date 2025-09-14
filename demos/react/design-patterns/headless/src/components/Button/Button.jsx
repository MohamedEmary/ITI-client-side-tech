import classnames from "classnames";

export default function Button({
	children,
	className,
	size,
	variant,
	...rest
}) {
	// ShadCn clsx
	let sizeClass = size && `button-${size}`;
	let variantClass = size && `button-${variant}`;
	let allClasses = classnames(className, sizeClass, variantClass);
	return (
		// <button className={`${className} ${sizeClass} ${variantClass}`} {...rest}>
		<button className={allClasses} {...rest}>
			{children}
		</button>
	);
}
