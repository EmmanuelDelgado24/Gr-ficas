import { executeQuery as executeQuery4D } from "../../../config/4 Dígitos/conection4.js";

export const inventario4 = async (req) => {
    try {
        const SQL = `
        SELECT
                'ABBA',
                lc.lc_prog, 
                lc.lc_lote, 
                lc.lc_estilo, 
                ec.ec_describe, 
                rn.re_fecsal, 
                cte.cc_nomcte, 
                lc.lc_status, 
                dp.dp_descrip,
                sd.sd_descrip, 
                lc.lc_parlot, 
                rn.re_codcte, 
                rn.re_codage, 
                lc.lc_planta, 
                lc.lc_fecpro, 
                lc.lc_piecol, 
                ln.li_descrip, 
                ld.ld_pedido,
                lc.lc_sempro, 
                lc.lc_diapro,
                -- Lógica de búsqueda de punto/talla
                CASE
                    WHEN lc.lc_pto01 > 0 THEN (SELECT cd.cd_despto FROM cordet cd WHERE cd.cd_corrida=lc.lc_corrida AND cd.cd_orden=1)
                    WHEN lc.lc_pto02 > 0 THEN (SELECT cd.cd_despto FROM cordet cd WHERE cd.cd_corrida=lc.lc_corrida AND cd.cd_orden=2)
                    -- ... (se repite hasta el 17)
                    WHEN lc.lc_pto17 > 0 THEN (SELECT cd.cd_despto FROM cordet cd WHERE cd.cd_corrida=lc.lc_corrida AND cd.cd_orden=17)
                END AS punto_talla,
                ed.ed_observa, 
                ed2.ed_observa, 
                ec.ec_codap
            FROM lotcab lc
            LEFT OUTER JOIN espcab ec  ON ec.ec_codest = lc.lc_estilo AND ec.ec_piecol = lc.lc_piecol AND ec.ec_combina = lc.lc_combina
            LEFT OUTER JOIN lotdet ld  ON ld.ld_prog = lc.lc_prog AND ld.ld_lote = lc.lc_lote
            LEFT OUTER JOIN renglon rn ON rn.re_folped = ld.ld_pedido AND rn.re_numren = ld.ld_ren
            LEFT OUTER JOIN depa dp    ON dp.dp_coddep = lc.lc_status
            LEFT OUTER JOIN ctes cte   ON cte.cc_codcte = rn.re_codcte
            LEFT OUTER JOIN subdepto sd ON sd.sd_codigo = lc.lc_subdepto
            LEFT OUTER JOIN estilo et  ON et.es_codest = lc.lc_estilo
            LEFT OUTER JOIN linea ln   ON ln.li_codlin = et.es_linea
            LEFT OUTER JOIN espdet ed  ON ed.ed_codest = lc.lc_estilo AND ed.ed_piecol = lc.lc_piecol AND ed.ed_combina = lc.lc_combina AND ed.ed_compo = '901'
            LEFT OUTER JOIN espdet ed2 ON ed2.ed_codest = lc.lc_estilo AND ed2.ed_piecol = lc.lc_piecol AND ed2.ed_combina = lc.lc_combina AND ed2.ed_compo = '902'
            WHERE lc.lc_fecpro >= '2026/01/01'

    `;
        // Guarda en rows la consulta SQL
        const rows = await executeQuery4D(SQL);

        console.log("📌 RESULTADO DE executeQuery4D:", rows);

        // ED Map Clave-Valor
        const programa = new Set();

        const status = new Set();

        // creo objeto pivot que va a recibir lo que hay en clave valor
        const pivot = {};


        for (const r of rows) {
            const prog = r.LC_PROG;
            const stat = r.LC_STATUS;

            programa.add(prog);
            status.add(stat);

            // Si no existe la fila, la creamos
            if (!pivot[stat])
                pivot[stat] = { LC_STATUS: stat };

            // Si no existe la columna, iniciamos en 0
            if (!pivot[stat][prog])
                pivot[stat][prog] = 0;

            // SUMAMOS EL PARLOT
            pivot[stat][prog] += Number(r.LC_PARLOT || 0);
        }

        // Convertimo el objeto en arreglo
        const pivotArray = Object.values(pivot)

        return {
            page: pagina,
            limit,
            desde,
            hasta,
            data: rows,          // datos originales
            pivot: pivotArray,       // matriz dinámica
            columns: Array.from(programa),  // columnas dinámicas
            rows: Array.from(status),    // filas dinámicas
        };



    } catch (error) {
        console.error("🔥 ERROR en inventario4:", error);
        throw error;
        //res.status(500).json({ error: "Error ejecutando consulta" });
    }
}