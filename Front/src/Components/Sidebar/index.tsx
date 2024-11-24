import colors from "../../Styles/colors";
import logo from "../../Assets/Imgs/LogoWhiteM.svg";
import { Link, useLocation } from "react-router-dom";
import { routesCalendario, routesColab } from "./routes";
import { Item } from "./Item";
import { Title } from "./Title";
import { removerAcentos } from "../../Helpers/textHelper";
import { ReactComponent as ArrowIcon } from "../../Assets/Imgs/Arrow.svg";

// TODO: Separar logicas de menus em lugares diferentes (na pressa fiz assim cagado kk)

export const Sidebar = () => {
  const location = useLocation();

  const [, , moduloNome, moduloValor, moduloCalendarioValor] =
    location.pathname.split("/");

  console.log({ moduloCalendarioValor });
  return (
    <div
      style={{
        width: "25%",
        background: `linear-gradient(20deg, ${colors.neutral80} 0%, ${colors.neutral60} 50%, ${colors.neutral60} 100%)`,
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "20px",
          marginTop: "10px",
        }}
      >
        <img src={logo} alt="Logo" width={80} />
        {moduloNome === "colaboradores" && <Title title={moduloNome} />}
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {moduloNome === "colaboradores"
            ? routesColab.map((item) => (
                <Item
                  item={{
                    name: item.name,
                    value: `${moduloNome}/${item.value}`,
                  }}
                  active={item.value === moduloValor}
                />
              ))
            : routesCalendario.map((item) => {
                return (
                  <>
                    <Title title={item.categoria} />
                    {item.subMenus.map((subMenu) => (
                      <>
                        <Item
                          item={{
                            name: subMenu.name,
                            value: `${moduloNome}/${removerAcentos(
                              item.categoria
                            )}/${subMenu.value}`,
                          }}
                          active={subMenu.value === moduloCalendarioValor}
                        />
                      </>
                    ))}
                    {item.categoria !==
                    routesCalendario[routesCalendario.length - 1].categoria ? (
                      <div
                        style={{
                          borderTop: `1px solid ${
                            item.subMenus[item.subMenus.length - 1].value ===
                            moduloCalendarioValor
                              ? colors.neutral0
                              : colors.neutral40
                          }`,
                          width: "100px",
                          marginTop: "6px",
                          marginLeft: "24px",
                          transition: "all 0.3s",
                        }}
                      />
                    ) : (
                      <div></div>
                    )}
                  </>
                );
              })}
        </ul>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "30px",
          left: "20px",
          zIndex: 10,
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <ArrowIcon height={13} width={13} />
            <span
              style={{
                color: colors.neutral10,
                marginLeft: "15px",
                marginBottom: "2px",
              }}
            >
              {" "}
              Voltar ao início{" "}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
