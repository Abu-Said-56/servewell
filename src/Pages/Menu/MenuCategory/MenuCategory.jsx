import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({items, title, image}) => {
    return (
        <div className="mb-8 p-8">
            {title && <Cover image={image} title={title}></Cover>}
              <div className="grid md:grid-cols-2 py-12">
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <button className="btn btn-outline text-lg uppercase border-4 border-b-yellow-600 flex mx-auto"> Order Your Favourite Food</button>
        </div>
    );
};

export default MenuCategory;