import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
    const sceneRef = useRef(null);

    // Создаем сцену, камеру и рендерер внутри useEffect
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Создаем свет и включаем тени
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(50, 50, 50);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        // Настройки теней для мягкости
        directionalLight.shadow.mapSize.width = 1024;
        directionalLight.shadow.mapSize.height = 1024;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 200;

        // Создаем куб и добавляем его в сцену
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        cube.castShadow = true;
        scene.add(cube);

        // Создаем плоскость и добавляем ее в сцену
        const planeGeometry = new THREE.PlaneGeometry(200, 200);
        const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = -5;
        plane.receiveShadow = true;
        scene.add(plane);

        // Устанавливаем позицию камеры
        camera.position.z = 5;

        // Добавляем рендерер в DOM
        // @ts-ignore
        sceneRef.current.appendChild(renderer.domElement);


        // Функция анимации
        const animate = () => {
            requestAnimationFrame(animate);

            // Анимация объектов (вращение куба в данном случае)
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            // Очистка ресурсов при размонтировании компонента
            renderer.dispose();
        };
    }, []);

    return <div ref={sceneRef} />;
};

export default ThreeScene;