import React, { useState } from "react"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box
} from "@mui/material"
import colors from "../../../../../Styles/colors"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

type TAccordionColab = {
  id: string
  expanded: boolean
  handleChange: (event: React.SyntheticEvent, expanded: boolean) => void
  title: string
  data: {
    name: string
    tags: string[]
  }[]
}
export const AccordionColab = ({
  expanded,
  handleChange,
  id,
  title,
  data
}: TAccordionColab) => {
  return (
    <Accordion
      sx={{
        width: "350px",
        borderRadius: "10px !important",
        background: `linear-gradient(0deg, ${colors.neutral60}, ${colors.neutral60}),
linear-gradient(264.05deg, rgba(147, 160, 176, 0.2) 0%, rgba(50, 64, 82, 0.2) 50%)`
      }}
      expanded={expanded}
      onChange={handleChange}
    >
      <AccordionSummary
        aria-controls={`${id}-content`}
        id={`${id}-header`}
        expandIcon={<ExpandMoreIcon sx={{ fontSize: "2rem" }} />}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            gap: "20px"
          }}
        >
          {data.map(item => {
            return (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "160px"
                }}
              >
                <h4
                  style={{
                    textAlign: "center",
                    marginTop: "0px"
                  }}
                >
                  {item.name}
                </h4>
                <Box
                  sx={{
                    display: "flex",
                    gap: "5px",
                    flexWrap: "wrap",
                    justifyContent: "center"
                  }}
                >
                  {item.tags.map(tag => (
                    <span
                      style={{
                        color: colors.accent100,
                        border: `1px solid ${colors.accent100}`,
                        borderRadius: "100px",
                        fontSize: "12px",
                        padding: "5px"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </Box>
              </Box>
            )
          })}
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}
