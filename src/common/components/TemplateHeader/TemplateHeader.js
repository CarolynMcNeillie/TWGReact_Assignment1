import React from 'react'

import { MainNav } from 'common/components/MainNav/index.js'
import { Header } from 'common/components/Header/index.js'
import { Aisles } from 'common/components/Aisles/index.js'

export const TemplateHeader = () => (
  <>
    <MainNav/>
    <Header/>
    <Aisles/>
  </>
)
