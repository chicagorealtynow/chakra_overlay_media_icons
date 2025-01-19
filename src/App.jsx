import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import HomePage from './pages/HomePage';
    import AlertDialogPage from './pages/AlertDialogPage';
    import DrawerPage from './pages/DrawerPage';
    import MenuPage from './pages/MenuPage';
    import ModalPage from './pages/ModalPage';
    import PopoverPage from './pages/PopoverPage';
    import TooltipPage from './pages/TooltipPage';
    import AvatarPage from './pages/AvatarPage';
    import IconPage from './pages/IconPage';
    import ImagePage from './pages/ImagePage';

    function App() {
      return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/alert-dialog" element={<AlertDialogPage />} />
          <Route path="/drawer" element={<DrawerPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/modal" element={<ModalPage />} />
          <Route path="/popover" element={<PopoverPage />} />
          <Route path="/tooltip" element={<TooltipPage />} />
          <Route path="/avatar" element={<AvatarPage />} />
          <Route path="/icon" element={<IconPage />} />
          <Route path="/image" element={<ImagePage />} />
        </Routes>
      );
    }

    export default App;
