import socket from "../content/python/socket.module";

const Template = () => {
  return (
    <>
      {socket.map((section, index) => (
        <section key={index}>
          <h2>{section.type}</h2>
          {section.all.map((all, i) => (
            <div key={i}>
              <h3>{i+1}. {all.title}</h3>
              <code>{all.syntax}</code>
              <p>{all.desc}</p>

              {all.method && all.methods && (
                <table>
                  <tbody>
                    {all.methods.map((fn, idx) => (
                      <tr key={idx}>
                        <td><code>{fn.syntax}</code></td>
                        <td>{fn.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {all.example && (
                <>
                  <div dangerouslySetInnerHTML={{ __html: all.code }} />
                  <p>{all.output}</p>
                </>
              )}
            </div>
          ))}
        </section>
      ))}
    </>
  );
};

export default Template;
