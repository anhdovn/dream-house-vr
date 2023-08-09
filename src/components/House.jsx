import { useGLTF } from '@react-three/drei';
import React from 'react';

export default function House(props) {
  const { nodes, materials } = useGLTF('models/house.glb');
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-8.61, 0.61, -4.25]} rotation={[-Math.PI, 0.15, -Math.PI]} scale={1.25}>
            <mesh geometry={nodes['Material-aesop_bottles_matt'].geometry} material={materials.aesop_bottles_matt} />
            <mesh geometry={nodes['Material-aesop_bottles_gloss'].geometry} material={materials.aesop_bottles_gloss} />
          </group>
          <group position={[-5.57, 0.16, -6.26]} rotation={[0, -0.77, 0]} scale={1.25}>
            <mesh geometry={nodes['Material-amber_velvet'].geometry} material={materials.amber_velvet} />
          </group>
          <group position={[-2.84, 0.74, -6.36]} rotation={[Math.PI, 0, Math.PI]} scale={0.7}>
            <mesh geometry={nodes['Material-aranda'].geometry} material={materials.aranda} />
          </group>
          <group position={[8.42, -0.2, -1.33]} rotation={[0, -0.31, Math.PI / 10]} scale={[1.48, 1.77, 1.48]}>
            <mesh geometry={nodes['Material-arch42_028'].geometry} material={materials.arch42_028} />
          </group>
          <mesh geometry={nodes['Material-architrave'].geometry} material={materials.architrave} />
          <mesh
            geometry={nodes['Material-bathroom_fixtures_matt'].geometry}
            material={materials.bathroom_fixtures_matt}
          />
          <mesh
            geometry={nodes['Material-bathroom_fixtures_trans'].geometry}
            material={materials.bathroom_fixtures_trans}
          />
          <mesh
            geometry={nodes['Material-bathroom_fixtures_gloss'].geometry}
            material={materials.bathroom_fixtures_gloss}
          />
          <group position={[-13.63, -0.24, 1.89]} rotation={[-Math.PI, 0.65, -Math.PI]} scale={[0.37, 0.39, 0.37]}>
            <mesh geometry={nodes['Material-birdOfparadise'].geometry} material={materials.birdOfparadise} />
          </group>
          <group position={[11.08, -0.26, -1.33]} rotation={[0, 1.35, 0]} scale={0.43}>
            <mesh geometry={nodes['Material-boston_fern'].geometry} material={materials.boston_fern} />
          </group>
          <mesh geometry={nodes['Material-cabinetry'].geometry} material={materials.cabinetry} />
          <mesh geometry={nodes['Material-colourbond_fence'].geometry} material={materials.colourbond_fence} />
          <group position={[-3.06, 0.86, 1.7]} rotation={[0, 1.57, 0]}>
            <mesh geometry={nodes['Material-cooktop'].geometry} material={materials.cooktop} />
          </group>
          <mesh geometry={nodes['Material-cornice'].geometry} material={materials.cornice} />
          <group position={[4.72, 2.89, 5.51]} rotation={[-Math.PI, 0, -Math.PI]}>
            <mesh
              geometry={nodes['Material-decor_bed_three_1_gloss'].geometry}
              material={materials.decor_bed_three_1_gloss}
            />
            <mesh
              geometry={nodes['Material-decor_bed_three_1_trans'].geometry}
              material={materials.decor_bed_three_1_trans}
            />
            <mesh
              geometry={nodes['Material-decor_bed_three_1_matt'].geometry}
              material={materials.decor_bed_three_1_matt}
            />
          </group>
          <group position={[5.72, 2.88, 3.15]} rotation={[Math.PI, Math.PI / 2, 0]} scale={[-0.85, -1.1, -0.95]}>
            <mesh geometry={nodes['Material-decor_bed_three_2'].geometry} material={materials.decor_bed_three_2} />
          </group>
          <group position={[-9.08, 0.73, 5.24]} rotation={[0, Math.PI / 2, 0]} scale={[0.85, 0.75, 0.85]}>
            <mesh
              geometry={nodes['Material-decor_dining_1_trans'].geometry}
              material={materials.decor_dining_1_trans}
            />
            <mesh
              geometry={nodes['Material-decor_dining_1_gloss'].geometry}
              material={materials.decor_dining_1_gloss}
            />
            <mesh geometry={nodes['Material-decor_dining_1_matt'].geometry} material={materials.decor_dining_1_gloss} />
          </group>
          <group position={[-8.87, 0.63, 2.61]} scale={[3, 2.4, 3]}>
            <mesh
              geometry={nodes['Material-decor_dining_2_gloss'].geometry}
              material={materials.decor_dining_2_gloss}
            />
            <mesh
              geometry={nodes['Material-decor_dining_2_trans'].geometry}
              material={materials.decor_dining_2_trans}
            />
            <mesh geometry={nodes['Material-decor_dining_2_matt'].geometry} material={materials.decor_dining_2_matt} />
          </group>
          <group position={[-8.31, 3.69, 2.87]} scale={0.55}>
            <mesh geometry={nodes['Material-decor_ensuite_trans'].geometry} material={materials.decor_ensuite_trans} />
            <mesh geometry={nodes['Material-decor_ensuite_gloss'].geometry} material={materials.decor_ensuite_gloss} />
            <mesh geometry={nodes['Material-decor_ensuite_matt'].geometry} material={materials.decor_ensuite_matt} />
          </group>
          <group position={[-10.76, 0, -1.88]} rotation={[0, 1.57, 0]} scale={[1.2, 1.1, 1.1]}>
            <mesh
              geometry={nodes['Material-decor_family_1_gloss'].geometry}
              material={materials.decor_family_1_gloss}
            />
            <mesh geometry={nodes['Material-decor_family_1_matt'].geometry} material={materials.decor_family_1_gloss} />
          </group>
          <group position={[-8.07, 0.38, -3.66]} scale={[1.1, 1.2, 1.1]}>
            <mesh geometry={nodes['Material-decor_family_2_gloss'].geometry} material={materials.decor_family_2_matt} />
            <mesh geometry={nodes['Material-decor_family_2_matt'].geometry} material={materials.decor_family_2_matt} />
          </group>
          <group position={[-6.17, 0, 1.49]} scale={[1, 1.03, 1]}>
            <mesh geometry={nodes['Material-decor_kitchen_matt'].geometry} material={materials.decor_kitchen_matt} />
            <mesh geometry={nodes['Material-decor_kitchen_gloss'].geometry} material={materials.decor_kitchen_gloss} />
          </group>
          <group position={[-1.4, 1.23, 6.89]} rotation={[-Math.PI, -1.23, 3.12]} scale={0.04}>
            <mesh geometry={nodes['Material-decor_laundry_matt'].geometry} material={materials.decor_laundry_matt} />
            <mesh geometry={nodes['Material-decor_laundry_trans'].geometry} material={materials.decor_laundry_gloss} />
          </group>
          <group position={[3.86, 0.48, -3.38]} rotation={[-1.05, 1.38, 1.04]} scale={[1.11, 0.8, 0.6]}>
            <mesh
              geometry={nodes['Material-decor_living_sofa_legs'].geometry}
              material={materials.decor_living_sofa_legs}
            />
            <mesh geometry={nodes['Material-decor_living_trans'].geometry} material={materials.decor_living_trans} />
            <mesh geometry={nodes['Material-decor_living_matt'].geometry} material={materials.decor_living_gloss} />
            <mesh geometry={nodes['Material-decor_living_gloss'].geometry} material={materials.decor_living_gloss} />
          </group>
          <group position={[6.54, 3.04, 1.94]} rotation={[-Math.PI, 0.16, -Math.PI]} scale={[1.5, 1.8, 1.5]}>
            <mesh
              geometry={nodes['Material-decor_master_bed_1_matt'].geometry}
              material={materials.decor_master_bed_1_matt}
            />
            <mesh
              geometry={nodes['Material-decor_master_bed_1_gloss'].geometry}
              material={materials.decor_master_bed_1_gloss}
            />
            <mesh
              geometry={nodes['Material-decor_master_bed_1_trans'].geometry}
              material={materials.decor_master_bed_1_trans}
            />
          </group>
          <group position={[-9.08, 2.88, -2.17]} scale={[1.15, 1, 1]}>
            <mesh geometry={nodes['Material-decor_master_bed_2'].geometry} material={materials.decor_master_bed_2} />
          </group>
          <group position={[1.44, 0.42, -0.07]} rotation={[3.11, 0.4, -3.06]} scale={[1.39, 1.11, 1.11]}>
            <mesh
              geometry={nodes['Material-decor_rumpus_1_gloss'].geometry}
              material={materials.decor_rumpus_1_gloss}
            />
            <mesh geometry={nodes['Material-decor_rumpus_1_matt'].geometry} material={materials.decor_rumpus_1_matt} />
          </group>
          <group position={[-0.03, 2.88, 5.31]} rotation={[-Math.PI, 0, 0]} scale={[-1, -1.1, -1]}>
            <mesh geometry={nodes['Material-decor_rumpus_2_matt'].geometry} material={materials.decor_rumpus_2_matt} />
            <mesh geometry={nodes['Material-decor_rumpus_2_gloss'].geometry} material={materials.decor_rumpus_2_matt} />
            <mesh
              geometry={nodes['Material-decor_rumpus_2_trans'].geometry}
              material={materials.decor_rumpus_2_trans}
            />
          </group>
          <group position={[-9.41, 4.08, 1.22]} rotation={[0, -0.02, 0]} scale={[1, 1.66, 1]}>
            <mesh geometry={nodes['Material-decor_wir'].geometry} material={materials.decor_wir} />
          </group>
          <group position={[-1.3, 0.01, 1.45]} rotation={[0, -1.57, 0]} scale={[0.98, 1, 1]}>
            <mesh geometry={nodes['Material-dishwasher'].geometry} material={materials.dishwasher} />
          </group>
          <mesh geometry={nodes['Material-doors_windows_matt'].geometry} material={materials.Render} />
          <mesh geometry={nodes['Material-doors_windows_gloss'].geometry} material={materials.doors_windows_gloss} />
          <mesh geometry={nodes['Material-doors_windows_trans'].geometry} material={materials.doors_windows_trans} />
          <group position={[-9.26, 5.48, 3.27]} scale={1.05}>
            <mesh geometry={nodes['Material-downlights'].geometry} material={materials.downlights} />
          </group>
          <group position={[1.15, 0, -2.22]} rotation={[-Math.PI, 1.4, -Math.PI]} scale={1.1}>
            <mesh geometry={nodes['Material-eames'].geometry} material={materials.eames} />
          </group>
          <mesh
            geometry={nodes['Material-ensuite_cabinet_gloss'].geometry}
            material={materials.ensuite_cabinet_gloss}
          />
          <mesh
            geometry={nodes['Material-ensuite_cabinet_mirror'].geometry}
            material={materials.ensuite_cabinet_mirror}
          />
          <group position={[0.85, 0, -3.09]} rotation={[0, 1.57, 0]} scale={[1.49, 1.27, 1.27]}>
            <mesh geometry={nodes['Material-file_cabinet'].geometry} material={materials.file_cabinet} />
          </group>
          <group position={[-10.7, 1.37, -3.61]} rotation={[0, 0.7, 0]}>
            <mesh geometry={nodes['Material-fireplace_gloss'].geometry} material={materials.fireplace_trans} />
          </group>
          <mesh geometry={nodes['Material-floor_ceiling_gloss'].geometry} material={materials.floor_ceiling_gloss} />
          <mesh geometry={nodes['Material-floor_ceiling_matt'].geometry} material={materials.floor_ceiling_matt} />
          <group position={[-3.47, 0, 5.03]} scale={[1.4, 1.1, 1.1]}>
            <mesh geometry={nodes['Material-fridge'].geometry} material={materials.fridge} />
          </group>
          <mesh geometry={nodes['Material-front_fence_gloss'].geometry} material={materials.front_fence_gloss} />
          <mesh geometry={nodes['Material-front_fence_matt'].geometry} material={materials.front_fence_matt} />
          <group position={[-16.25, 0.49, -4.89]} rotation={[Math.PI, 0, Math.PI]} scale={[2.4, 2.4, 2.97]}>
            <mesh geometry={nodes['Material-ivy_1'].geometry} material={materials.ivy_1} />
          </group>
          <group position={[-16.16, 1.33, -3.91]} rotation={[3.11, 0, Math.PI]} scale={1.14}>
            <mesh geometry={nodes['Material-ivy_2'].geometry} material={materials.ivy_2} />
          </group>
          <group position={[-15.71, -0.22, -1.23]} rotation={[0, 0.78, 0]} scale={0.53}>
            <mesh geometry={nodes['Material-katie_bells'].geometry} material={materials.katie_bells} />
          </group>
          <mesh geometry={nodes['Material-kitchen_matt'].geometry} material={materials.kitchen_matt} />
          <mesh geometry={nodes['Material-kitchen_gloss'].geometry} material={materials.kitchen_gloss} />
          <mesh geometry={nodes['Material-landscaping_trans'].geometry} material={materials.landscaping_trans} />
          <mesh geometry={nodes['Material-landscaping_gloss'].geometry} material={materials.landscaping_gloss} />

          <mesh geometry={nodes['Material-landscaping_matt'].geometry} material={materials.landscaping_matt} />

          <group position={[-8.98, 0.38, -3.68]} scale={[1.2, 1.4, 1.4]}>
            <mesh
              geometry={nodes['Material-LCD_Screen_highgloss'].geometry}
              material={materials.LCD_Screen_highgloss}
            />
            <mesh geometry={nodes['Material-LCD_Screen_lowgloss'].geometry} material={materials.LCD_Screen_lowgloss} />
          </group>
          <group position={[-8.87, 2.6, 2.62]} rotation={[0, -1.57, 0]} scale={1.94}>
            <mesh
              geometry={nodes['Material-light_pendants_gloss'].geometry}
              material={materials.light_pendants_gloss}
            />
            <mesh
              geometry={nodes['Material-light_pendants_trans'].geometry}
              material={materials.light_pendants_trans}
            />
          </group>
          <group position={[-14.72, 0.11, -5.36]} rotation={[0, -0.45, 0]} scale={[0.8, 1, 0.87]}>
            <mesh geometry={nodes['Material-little_ruby'].geometry} material={materials.little_ruby} />
          </group>
          <group position={[-5.43, 0.38, 1.88]} rotation={[0, Math.PI / 2, 0]} scale={0.9}>
            <mesh geometry={nodes['Material-microwave_lowgloss'].geometry} material={materials.microwave_highgloss} />
          </group>
          <group position={[-8.88, -0.2, -6.31]}>
            <mesh geometry={nodes['Material-outdoor_bench'].geometry} material={materials.outdoor_bench} />
          </group>
          <mesh
            geometry={nodes['Material-outdoor_elements_gloss'].geometry}
            material={materials.outdoor_elements_gloss}
          />
          <mesh
            geometry={nodes['Material-outdoor_elements_matt'].geometry}
            material={materials.outdoor_elements_matt}
          />
          <group position={[-13.45, -0.2, 5.41]} rotation={[-Math.PI, 0.26, -Math.PI]} scale={[0.9, 0.8, 0.9]}>
            <mesh geometry={nodes['Material-outdoor_sofa_gloss'].geometry} material={materials.outdoor_sofa_gloss} />
            <mesh geometry={nodes['Material-outdoor_sofa_matt'].geometry} material={materials.outdoor_sofa_matt} />
          </group>
          <group position={[12.52, -0.21, -6.6]} scale={[1, 1.05, 1]}>
            <mesh geometry={nodes['Material-paling_fence'].geometry} material={materials.paling_fence} />
          </group>
          <group position={[9.34, -0.28, 4.28]} rotation={[0, -1.57, 0]} scale={0.95}>
            <mesh geometry={nodes['Material-range_rover_trans'].geometry} material={materials.range_rover_trans} />
            <mesh geometry={nodes['Material-range_rover_gloss'].geometry} material={materials.range_rover_trans} />
            <mesh geometry={nodes['Material-range_rover_matt'].geometry} material={materials.range_rover_trans} />
          </group>
          <group position={[-3.16, 1.55, 1.7]} rotation={[0, 1.57, 0]} scale={0.68}>
            <mesh geometry={nodes['Material-rangehood'].geometry} material={materials.rangehood} />
          </group>
          <mesh geometry={nodes['Material-roof_gloss'].geometry} material={materials.roof_gloss} />
          <mesh geometry={nodes['Material-roof_matt'].geometry} material={materials.roof_matt} />
          <group position={[-15.4, -0.2, -6.03]} rotation={[0, -0.17, 0]} scale={0.33}>
            <mesh geometry={nodes['Material-speedtree_acacia'].geometry} material={materials.speedtree_acacia} />
          </group>
          <group position={[-17.28, 0, 0.4]} rotation={[Math.PI, 0, Math.PI]} scale={[2.1, 2.1, 2.18]}>
            <mesh
              geometry={nodes['Material-treeline_1'].geometry}
              material={materials.treeline_1}
              position={[0, -0.13, 0]}
            />
          </group>
          <group position={[6.38, 1.36, 6.82]} rotation={[0, 1.57, 0]} scale={[1.25, 1.5, 1.25]}>
            <mesh geometry={nodes['Material-wall_bollards'].geometry} material={materials.wall_bollards} />
          </group>
          <group position={[-3.92, 0.9, 0.88]} rotation={[0, -1.57, 0]} scale={[1.3, 1.22, 1.22]}>
            <mesh geometry={nodes['Material-wall_ovens_lowgloss'].geometry} material={materials.wall_ovens_lowgloss} />
          </group>
          <mesh geometry={nodes['Material-walls_gloss'].geometry} material={materials.walls_gloss} />
          <mesh geometry={nodes['Material-walls_matt'].geometry} material={materials.walls_matt} />
          <group position={[-1.05, -0.18, 6.87]} rotation={[Math.PI, 0, Math.PI]} scale={[0.94, 0.9, 0.94]}>
            <mesh geometry={nodes['Material-washer_dryer_gloss'].geometry} material={materials.washer_dryer_gloss} />
            <mesh geometry={nodes['Material-washer_dryer_matt'].geometry} material={materials.washer_dryer_matt} />
            <mesh geometry={nodes['Material-washer_dryer_trans'].geometry} material={materials.washer_dryer_trans} />
          </group>
        </group>
      </group>
      <mesh geometry={nodes.Plane.geometry} material={materials.ground} position={[0, -0.31, 0]} />

    </group>
  );
}

useGLTF.preload('models/house.glb');
