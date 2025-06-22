import styled from "@emotion/styled";

interface MenuItemProps {
  active?: boolean;
}

interface MenuProps {
  currentRoute: string;
  setRoute: React.Dispatch<React.SetStateAction<string>>;
}

const MenuHolder = styled.div`
  background-color: #131516;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  padding: 1rem 1rem;
  gap: 20%;
`;

const MenuItem = styled.p<MenuItemProps>`
  padding: 0.5rem 2rem;
  border-radius: 10%;
  background-color: ${(props) => (props.active ? "#222527" : "transparent")};

  :hover {
    cursor: pointer;
  }
`;

function Menu({ currentRoute, setRoute }: MenuProps) {
  function changeRoute(route: string) {
    setRoute(route);
  }

  return (
    <MenuHolder>
      <MenuItem
        onClick={() => changeRoute("about")}
        active={currentRoute === "about"}
      >
        Home
      </MenuItem>
      <MenuItem
        onClick={() => changeRoute("blog")}
        active={currentRoute === "blog"}
      >
        Blog
      </MenuItem>
    </MenuHolder>
  );
}

export default Menu;
