import { Link } from "@inertiajs/react";

const Pagination = ({ links }) => {
    return (
        <nav className="text-center mt-4">
            {links.map((link) => (
                <Link
                    preserveScroll
                    key={link.label}
                    href={link.url || ""}
                    className={
                        "inline-block px-3 py-2 rounded-lg text-grey-200 text-xs " +
                        (link.active ? "bg-slate-300 " : " ") +
                        (!link.url
                            ? "!text-slate-300 cursor-not-allowed "
                            : "hover:bg-slate-400")
                    }
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></Link>
            ))}
        </nav>
    );
};

export default Pagination;
