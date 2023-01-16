import React from 'react';
import ContentGenresInDb from './contentGenresInDb';
import ContentLastMovieInDb from './contentLastMovieInDb';
import ContentRowMovies from './contentRowMovies';

const ContentRowTop = () => {
	const metrics = [
		{
			titulo: 'Movies in Data Base',
			color: 'primary',
			cifra: 21,
			icono: 'fa-film'
		},
		{
			titulo: 'Total awards',
			color: 'success',
			cifra: 79,
			icono: 'fa-award'
		},
		{
			titulo: 'Actors quantity',
			color:'warning',
			cifra: 49,
			icono: 'fa-user'
		}
	]
    return (
                <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
					<div className="row">
					{
						metrics.map((metric, index) =>(
							<ContentRowMovies {...metric} key={metric.titulo + index}  />
						))
					}
					</div>
				
					
					
					
	
					<div className="row">
						
						<ContentLastMovieInDb />

						<ContentGenresInDb />
					</div>
				</div>
    );
}

export default ContentRowTop;
